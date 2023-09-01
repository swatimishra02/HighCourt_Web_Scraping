
# converting pdf to text when pdf is saved on the system

import PyPDF2
import pandas as pd

def extract_text_from_pdf(file_path):
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text += page.extract_text()
        return text

# Usage example
#file_path = r"C:\Users\KIIT\Desktop\hindi.pdf"
file_path = r"C:\Users\KIIT\Desktop\supreme_court_vernacular_judgement.pdf"
pdf_text = extract_text_from_pdf(file_path)

with open('hin_judgement.txt', 'w', encoding="utf-8") as f:
    f.write(pdf_text)

#High_court = set()

#for i in pdf_text:
 #   name = i
  #  High_court.add(name)
#print(High_court)

#df = pd.DataFrame({"high court": High_court})

#df.to_csv("high_court_data.csv")


