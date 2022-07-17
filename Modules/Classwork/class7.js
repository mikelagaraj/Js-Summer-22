/*if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"*/

    let day = `Sat`
    console.log(`\n Using switch-block`);
    switch(day.toLowerCase(day)) {
        case 'Mon':
            console.log("Today is the Technosoft class")
            break;
            case 'tue':
                console.log(" Today is self learning class")
                break;
                case 'Wed':
                    console.log("Today is the Technosoft class")
                    break;
                    case 'Thu':
                        console.log(" Today is self learning class")
                        break;
                        case 'Fri':
                            console.log("Today is the Technosoft class")
                            break;
                            case 'Sat':
                                console.log("Today is lab session day")
                                break;
                                case 'sun':
                                    console.log("No study today")
                                    break;
    
    
    
        
    }