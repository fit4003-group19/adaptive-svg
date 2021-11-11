import csv

import xmltodict
import re


def wrap_string(string):
    return '"' + string + '"'


def open_svg(svg_filename):
    with open(svg_filename) as fd:
        doc = xmltodict.parse(fd.read())
        fd.close()
    return doc


def open_csv(csv_filename):
    with open(csv_filename) as csv_file:
        loc_dict = {}
        csv.reader(csv_file)
        for current in csv_file:
            current = current.strip()
            current = current.split(',')
            loc_dict.update({current[0]: list(map(str.strip, current[1:]))})
    csv_file.close()
    return loc_dict


def build_path_str(path_text):
    return '<path data-layer-type="bg" d=' + path_text + '/>'


def build_title_desc_str(room_id, room_desc):
    title_str = '<title id=' + wrap_string(room_id + '--title') + '>' + room_id + '</title>'
    desc_str = '<desc id=' + wrap_string(room_id + '--desc') + '>' + room_desc + '</desc>'
    return title_str + desc_str


class Get_ID:
    # The input required are: svg filename, csv filename, prefix in the svg and the name of the output map,
    # with description of the map as optional
    def __init__(self, svg_filename, csv_filename, map_prefix, map_name, map_desc=None):
        # Store all input as private variable
        self.map_prefix = map_prefix
        self.layer_map = open_csv('layerMap.csv')
        self.csv = open_csv(csv_filename)
        self.svg = open_svg(svg_filename)
        self.map_name = map_name
        if not map_desc:
            self.map_desc = map_name
        else:
            self.map_desc = map_desc
        # Create opening strings for the SVG
        self.opening = self.get_opening_string()
        self.build_dict()

    def build_dict(self):
        inactive_array = ['food & beverage', 'retail', 'pharmacy']
        lift_array = ['lift', 'lifts', 'elevator', 'elevators']
        stairs_array = ['stair', 'stairs', 'staircase', 'stair cases', 'entry porch', 'entry porches']
        toilet_array = ['male toilet', 'female toilet', 'male toilets', 'female toilets', 'toilet', 'toilets']
        accessible_toilet_array = ['accessible toilet', 'accessible toilets', 'disabled toilet', 'disabled toilets',
                                   'all-gender/accessible toilet']
        passage_array = ['internal corridor', 'passage', 'circulation', 'foyer']
        entry_array = ['entry', 'airlock', 'airlocks']

        keyword_dict = dict.fromkeys(inactive_array, 'inactive')
        keyword_dict.update(dict.fromkeys(lift_array, 'lift'))
        keyword_dict.update(dict.fromkeys(stairs_array, 'stairs'))
        keyword_dict.update(dict.fromkeys(toilet_array, 'toilet'))
        keyword_dict.update(dict.fromkeys(accessible_toilet_array, 'accessible-toilet'))
        keyword_dict.update(dict.fromkeys(passage_array, 'passage'))
        keyword_dict.update(dict.fromkeys(entry_array, 'entry'))

        self.keyword_dict = keyword_dict

    def get_opening_string(self):
        # opening1 have the SVG headers
        with open('opening1.txt', 'r') as file:
            opening1 = file.read().replace('\n', '')
        # opeing2 have the accessible SVG structure
        with open('opening2.txt', 'r') as file:
            opening2 = file.read()
        # Return the full svg header before paths are inserted.
        return opening1 + self.wrap_title() + self.wrap_desc() + opening2

    def wrap_title(self):
        # Wraps the title with the title tags
        title_str = '<title id="svg--title">'
        close_str = '</title>'
        return title_str + self.map_name + close_str

    def wrap_desc(self):
        # Wraps the description with the title tags
        desc_str = '<desc id="svg--desc">'
        close_str = '</desc>'
        return desc_str + self.map_desc + close_str

    def layer0_convert(self):
        # Could look to use the doc['svg']['script'] in the future

        # setting variable for readability.
        path_dict = self.svg['svg']['g']['g']
        text_dict = self.svg['svg']['text']
        out_string = '<title>Floor Space</title>'
        closing_g = '</g>'

        # Path dict and text dict size should be same.
        size = len(path_dict)

        # loop through both dictionaries at the same time and taking only what is required
        for i in range(size):
            path = path_dict[i]['path']
            id_string = text_dict[i]['@id'].replace(self.map_prefix, '')
            # Find the related information about this id_string
            room_desc = self.csv.get(id_string, ['No Information'])
            group_string = self.class_finder(id_string, room_desc)
            title_desc_str = build_title_desc_str(id_string, room_desc[0])
            path_string = build_path_str(wrap_string(path['@d']))
            out_string = out_string + group_string + title_desc_str + path_string + closing_g
        return out_string + closing_g

    def class_finder(self, id_str, class_str):
        for item in class_str:
            if 'stair' in item.lower():
                x = 2
            item = re.sub(r' [0-9]+', '', item)
            value = self.keyword_dict.get(item.lower())
            if value:
                return self.build_group_str(id_str, value)
        return self.build_group_str(id_str)


    def build_group_str(self, id_str, class_str='unlisted'):
        # temp fix
        if class_str == 'stair':
            class_str = class_str + 's'
        group_str = '<g id =' + wrap_string(id_str) + ' class=' + wrap_string(class_str)
        class_tag_array = self.layer_map.get('class')
        class_value_array = self.layer_map.get(class_str)
        for i in range(len(class_tag_array)):
            # if data-layer-bit-field is irrelevant.
            if class_tag_array[i] == 'data-layer-bit-field' and class_value_array[i] == 'N/A':
                continue
            group_str = group_str + ' ' + class_tag_array[i] + '=' + wrap_string(class_value_array[i])
        return group_str + \
               ' aria-labelledby=' + wrap_string(id_str + '--title') + \
               ' aria-describedby=' + wrap_string(id_str + '--desc') + '>'

    def output_svg(self):
        return self.opening + self.layer0_convert() + '</svg>'

