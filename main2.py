
# extracting all the links from judgments.ecourts.gov.in/pdfsearch

import pandas as pd
import requests
from bs4 import BeautifulSoup
import PyPDF2

#url = "https://main.sci.gov.in"
url = "https://judgments.ecourts.gov.in/pdfsearch"
#url = "https://ecourts.gov.in/ecourts_home/static/highcourts.php"

r = requests.get(url)
htmlContent = r.content
#print(r)

soup = BeautifulSoup(htmlContent, "html.parser")
#print(soup.prettify)
High_court = []

anchors = soup.find_all('a')
all_links = set()

for link in anchors :
    href = link.get("href")
    if (link.get('href') != '#'):
        if href is not None:
            linkText = "https://judgments.ecourts.gov.in/pdfsearch" + link.get("href")
            all_links.add(link)
            print(linkText)
            High_court.append(linkText)
            print(High_court)

            #df = pd.DataFrame({"high court": High_court})

            #df.to_csv("high_court_data.csv")
        else:
            # Handle the case where href is None
            linkText = "https://judgments.ecourts.gov.in/pdfsearch "







