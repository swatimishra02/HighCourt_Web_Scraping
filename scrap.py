
# scraping main.sci.gov.in

import pandas as pd
import requests
from bs4 import BeautifulSoup
import PyPDF2


import lxml
import attrs
import PyPDF2
# from haystack.nodes.file_converter.pdf import PDFToTextConverter
# from pdf_to_text.pdf_to_text_converter import read_one_pdf_file_convert_to_txt_and_write

url = "https://ecourts.gov.in/ecourts_home/static/highcourts.php"

r = requests.get(url)

#print(r)

soup = BeautifulSoup(r.text, "lxml")
# print(soup)


#newpage = soup.find("a", class_ = "odd").get("href")
#print(newpage)


Supreme_court = []
High_court = []

#names = soup.find_all("div", class_ = "row")
names = soup.find_all("ul", tabindex = "0")

for i in names:
    name = i.text
    High_court.append(name)
# print(High_court)

df = pd.DataFrame({"high court": High_court})

df.to_csv("high_court_data.csv")

