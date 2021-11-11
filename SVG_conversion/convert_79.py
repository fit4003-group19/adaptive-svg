from Get_ID import Get_ID

my_map = Get_ID('labtry.svg', '79_desc.csv', '00079P0G', 'Building 79P')
output_string = my_map.output_svg()
f = open('converted_79.svg', 'w')
f.write(output_string)
f.close()
