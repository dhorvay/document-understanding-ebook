# Document Understanding eBook

> **Note**
> This book is in alpha - it is consistently being updated with content for a v1.0.0 release! 🤗

![logo](./src/logo.png)

This repository contains the source code for the Document Understanding eBook built with <a href="https://jupyterbook.org"> Jupyter Book.</a>

All of the material in this book is publicly available under the <a href="https://github.com/dhorvay/document-understanding-ebook/blob/main/LICENSE">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)</a> license.

## Build the Book

### Install the requirements

It is recommended to use venv to manage environment.
 
```sh
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Generate HTML

Run the following command to build the book.

```sh
jupyter-book build src
```

## Deploy to GitHub Pages

This repo is configured to automatically deploy to GitHub Pages using GitHub Actions. To manually deploy to GitHub Pages, run the following command:

```sh
ghp-import -n -p -f src/_build/html
```