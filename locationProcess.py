import pandas as pd
import json

path = "C:/Users/jades/Downloads/"

# col_name = ['city', 'latitude', 'longitude', 'country', 'population']

countries = pd.read_csv(path + 'population.csv', encoding = "ISO-8859-1", sep = ',')
countries = countries.dropna()
countries_set = set()
countries_dict = dict()

# print(countries)

for index, row in countries.iterrows():

    countries_set.add(row['country'])

for i in countries_set:
    countries_dict[i] = []

for i in countries_set:
    for index, row in countries.iterrows():
        if i == row['country'] and len(countries_dict[i]) <= 5:
            if int(row['population']) > 3000000 and len(countries_dict[i]) < 5:
                countries_dict[i].append(row['city'])

            else:
                continue

count = 0
for value in countries_dict.values():
    count = count + len(value)
print('city count:',count)
print('country number:', len(countries_set))

my_id = 0

output_str = ""

def output_template (id, city, latitude, longitude):
    return {
        "id":id,
        "city": city,
        "latitude": latitude,
        "longitude": longitude
    }


f = open(path + 'output.json', 'a')
for key, values in countries_dict.items():
    for city in values:
        df = countries.loc[(countries['city'] == city) & (countries['country'] == key)]
        # print(df)

        for i, row in df.iterrows():
            # print(row['city'])
            f.write(str(output_template(my_id, row['city'], float(row['latitude']), float(row['longitude']))))
            f.write(',')

        my_id = my_id + 1
f.close()

