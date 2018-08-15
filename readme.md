# Pig Latin Translator

#### A program that allows users to input a sentence and translate it into Pig Latin. 8/15/18.

#### By **Chris Crow & Connor McCarthy**

## Description

A website created with JavaScript and HTML where a user can input a sentence and translate it into Pig Latin


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.** | Input: "3" | Output: "3" |
| **The program adds "way" to the end of a single-letter word that is a vowel.** | Input: "i" | Output: "iway" |
| **The program adds "way" to the end of words beginning with a vowel.** | Input: "egg" | Output: "eggway" |
| **If the word begins with "y", the program moves "y" to the end and adds "ay"** | Input: "year" | Output: "earyay" |
| **The program moves the first letter of a single word beginning with a single consonant to the end and adds "ay"** | Input: "cat" | Output: "atcay" |
| **The program moves all consonants before the first vowel of a single word to the end and adds "ay"**| Input: "trap" | Output: "aptray"|
| **If the word begins with "q", the program moves "q" plus the following vowel to the end of the word and adds "ay"** | Input: "quit" | Output: "itquay" |
| **If the initial consonant cluster contains "q", the program moves the consonant cluster plus the following vowel to the end of the word and adds "ay"** | Input: "squeal" | Output: "ealsquay" |
| **The program returns each of the preceding specs regardless of capitalization** | Input: "DrIvE" | output: "ivedray" |
| **The program follows each of the preceding specs for multiple-word entries** | Input: "I eat the quick yellow chicken" | Output: "iay eatway ethay ickquay ellowyay ickenchay" |


## Setup/Installation Requirements

1. Clone this repository.
2. Open the index.html file in your browser of choice.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_Chris Crow & Connor McCarthy_**
