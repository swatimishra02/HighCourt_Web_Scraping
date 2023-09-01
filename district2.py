import requests
from bs4 import BeautifulSoup
# from selenium import webdriver
import pandas as pd

#webdriver_path = r"C:\Users\KIIT\Downloads\chromedriver_win32\chromedriver.exe"
#driver = webdriver.Chrome(webdriver_path)

url = "https://hcservices.ecourts.gov.in/hcservices/main.php#"
# url2 = "https://districts.ecourts.gov.in"
r = requests.get(url)
htmlContent = r.content
soup = BeautifulSoup(htmlContent, "html.parser")
districts = []

options = [option['value'] for option in soup.find_all('option')]
for i in options:
    states = i
    # High_court.append(states)
    # print(High_court)
    new_url = (url + '/' + states)
    # print(new_url)
    districts.append(new_url)
    df = pd.DataFrame({"districts": districts})

    df.to_csv("andaman.csv")

print(districts)





