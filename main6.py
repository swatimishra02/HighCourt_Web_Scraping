# to download pdf from web to system

import requests
from bs4 import BeautifulSoup
import urllib.parse

# URL of the webpage containing the PDFs
webpage_url = "https://ecourts.gov.in/ecourts_home"

# Send a GET request to the webpage
response = requests.get(webpage_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all <a> tags that link to PDF files
    pdf_links = soup.find_all("a", href=lambda href: href.endswith(".pdf"))

    # Download each PDF file
    for link in pdf_links:
        pdf_url = urllib.parse.urljoin(webpage_url, link["href"])
        response = requests.get(pdf_url)
        if response.status_code == 200:
            # Extract the filename from the URL
            filename = pdf_url.split("/")[-1]

            # Save the PDF file
            with open(filename, "wb") as file:
                file.write(response.content)
            print(f"Downloaded: {filename}")
        else:
            print(f"Failed to download: {pdf_url}")
else:
    print("Failed to retrieve the webpage.")

# https://ecourts.gov.in/ecourts_home/static/manuals/FINAL%20INNOVATIONS%20IN%20PHASE%20II.pdf
# https://ecourts.gov.in/ecourts_home/static/manuals/Objective%20Accomplishment%20Report-2019.pdf