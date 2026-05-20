---
title: Digitization Guidelines
description: Specifications for digital files derived from text-based materials (print, microfilm, microfiche) for SAOA's digital collections.
layout: working-group.njk
date: 2021-09-14
---

These are SAOA's technical guidelines for digital files derived from text-based materials (in print, microfilm, or microfiche) to be included in SAOA's digital collections. Digitization providers (commercial entities as well as academic institutions) will be expected to conform to these specifications to ensure consistency of the digital materials for ingest into the SAOA digital asset management system.

The following are the ideal specifications for ingesting image-based material into SAOA's collections.

1.  At the outset of each project, the SAOA Project Manager will schedule a phone consultation with the digitization provider to gather the following:
    1.  Estimates of the total number of images, volumes, and file size.
    2.  Details regarding the condition of the source material.
2.  Descriptive Metadata – the metadata should:
    1.  Use Dublin Core or MARC21.
    2.  Be in MARC XML or CSV format.
    3.  Conform to SAOA’s metadata templates.
    4.  Include accurate holdings for serials or multipart titles.
    5.  Be submitted as a sample set during the proposal phase.

NOTE: Forum entries must use UTF-8 encoding, which SAOA’s hosting platform defaults to.

3.  Structural Metadata – must support file organization and navigation (e.g., by chapter).
4.  Asset File Types:
    1.  TIFF for preservation
    2.  JPEG, JPEG2000, or PDF for access
    3.  OCR files (recommended):
        1.  .txt
        2.  OCR XML or HOCR
5.  Image Capture:
    1.  TIFF Master Files:
        1.  400–600 ppi resolution
        2.  Uncompressed TIFF 6.0
        3.  JHOVE-valid format
        4.  24-bit color; 8-bit grayscale acceptable in some cases
        5.  One page per image
    2.  JPEG/JP2/PDF Access Files:
        1.  Match or reduce resolution (minimum 300 ppi)
        2.  Compression: 10:1 to 15:1
        3.  File size: 0.5–2.5 MB
    3.  Image Quality:
        1.  Good tone distribution
        2.  Sharp, true-to-original rendering
        3.  Deskewed and cropped to text
6.  File Naming:
    1.  Monographs (Single Volume)
        1.  Format: titleID_YEAR_seq#.tif
        2.  Example: 986786411_1915_00135.tif
    2.  Monographs (Multi-Volume)
        1.  Format: titleID_YEAR_VOL_seq#.tif
        2.  Example: 990512780_1918_003_00115.tif
    3.  Serials
        1.  Numbered Issues:
            1.  Format: titleID_YEAR_VOL_ISSUE_seq#.tif
            2.  Example: 990312980_1915_002_001_00253.tif
        2.  Dated Issues:
            1.  Format: titleID_YYYY-MM-DD_seq#.tif
            2.  Example: 22123199_1921-12-24_00012.tif
        3.  Quarterly Issues:
            1.  Format: titleID_YEAR_Quarter_seq#.tif
            2.  Example: 226114808_1895_Spring_00005.tif
    4.  General Notes:
        1.  Master and access files must share the same base filename.
        2.  Use OCLC# as title ID.
        3.  Use 5-digit sequence numbers and 3-digit volume/issue codes.
7.  Folders:
    1.  For each title, create two folders:
        1.  OCLC#\_ShortTitle_TIFF
        2.  OCLC#\_ShortTitle_JP2
    2.  Monograph files go into the main folders.
    3.  Serials should use subfolders labeled by vol#/issue#/year.
    4.  Access and master files must match names exactly (only extensions differ).
8.  File Transfer:
    1.  Accepted transfer methods: hard drive, USB, FTP, Dropbox, Google Drive, CD.
