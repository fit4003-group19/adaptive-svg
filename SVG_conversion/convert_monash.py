from Get_ID import Get_ID

my_map = Get_ID('0001000G_0.svg', 'campus_desc.csv', '0001000G', 'Monash Campus Centre')
output_string = my_map.output_svg()
f = open('converted_mcc.svg', 'w')
f.write(output_string)
f.close()
