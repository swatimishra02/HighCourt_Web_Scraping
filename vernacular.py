# iNTK

from multilingual_pdf2text.pdf2text import PDF2Text
from multilingual_pdf2text.models.document_model.document import Document
import logging
from PIL import Image
import pytesseract
import PyPDF2
import os
import numexpr as ne
import warnings
import logging

os.environ["NUMEXPR_MAX_THREADS"] = "4"
#warnings.filterwarnings("ignore", category=UserWarning, module="numexpr")

logging.basicConfig(level=logging.INFO)
def main():
     #create document for extraction with configurations
    pdf_document = Document(
        document_path=r"C:\Users\KIIT\Desktop\hindi.pdf",
        language='hin'
        )
    pdf2text = PDF2Text(document=pdf_document)
    content = pdf2text.extract()
    print(content)


if __name__ == "__main__":
    main()

#link case name, name of judges, cnr, date of registration,, date of decision, disposal nature, court, url for pdf - high court, list of hc--> also needed for district courts, downloaded or not
# judgements.ecourts.gov.in




