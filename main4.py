
# converting pdf to text when pdf is taken from the web

import requests
import PyPDF2
import os
def extract_text_from_web_pdf(url):
    response = requests.get(url)
    with open('temp.pdf', 'wb') as file:
        file.write(response.content)

    with open('temp.pdf', 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''

        for page_num in range(len(reader.pages)):
            page = len(reader.pages)
            for page in reader.pages:
                text += page.extract_text()

      #      page = len(reader.pages)
       #     text += page.extract_text_from_web_pdf()

    # Remove the temporary PDF file
    # Comment out the next line if you want to keep the file
    # os.remove('temp.pdf')

    return text



pdf_url = 'https://main.sci.gov.in/supremecourt_vernacular/2022/21900/21900_2022_2_1501_44628_Judgement_19-May-2023_HIN.pdf'
pdf_text = extract_text_from_web_pdf(pdf_url)
#print(pdf_text)
with open('hin_judgement.txt', 'w', encoding = "utf-8") as f:
    f.write(pdf_text)
