# _Beep Boop Number Converter_

#### _Convert numbers into Beeps and Boops, 6/8/18_

#### By _**Renee Sarley**_

## Description

_This application will convert user-inputted numbers into a response of "Beep", "Boop", or "I'm sorry, Dave. I'm afraid I can't do that.". The response will be shown to the user. Each response will remain until the user clears the responses._

## Setup/Installation Requirements

* _This project can be cloned from the GitHub repo here: https://github.com/reneesarley/beep-boop_
* _The project can be viewed online here:_

## Specifications

* _Numbers that contain a 0 are replaced (all digits) with "Beep!"_
* _Numbers that contain a 1 are replaced (all digits) with "Boop!"_
* _Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."_

|Behavior  |     Input     | Output|
|:----------:|:-------------:|:------:|
| Program converts 0 to Beep | 0 | Beep |
| Program converts 1 to Beep | 1  | Boop|
| Program converts numbers that are divisible by 3 to "I'm sorry Dave. I'm afraid I can't do that." | 3 | I'm sorry Dave. I'm afraid I can't do that. |
| Program ignores numbers that don't contain 1 or 0 and aren't divisible by 3| 4| 4 |
| Program converts multiple digit numbers that contain 0 to "Beep"   | 200 | Beep |
| Program converts multiple digit numbers that contain 1 to "Boop" | 10 | Boop |
| Program converts multiple digit numbers that contain 3 to "I'm sorry Dave. I'm afraid I can't do that." | 30 | I'm sorry Dave. I'm afraid I can't do that. |
| Program will creat an array from 1 up to a number | 5 | [1, 2, 3, 4, 5] |

## Known Bugs

_There are currently no known bugs._

## Support and contact details

_Please email me with any questions._

## Technologies Used

* _JavaScript_
* _Bootstrap_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **_Renee Sarley_**
