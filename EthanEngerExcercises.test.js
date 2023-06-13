/**
 * @jest-environment jsdom
 */

const Excercises = require("./EthanEngerExcercises");


//Requirement 4
describe('Stringify elements', () => {
    {
        test('element to string test', () => {
            let exampleElement = document.createElement("a")
            exampleElement.setAttribute("id", "matt1");
            exampleElement.setAttribute("class", "link button fixture");
            exampleElement.setAttribute("name", "matt");
            expect(Excercises.StringifyElement(exampleElement)).toBe('a:matt1:link.button.fixture:matt');
        });
        
        test('null attributes test', () => {
            let exampleElement = document.createElement("a")
            expect(Excercises.StringifyElement(exampleElement)).toBe("a");
        });
    }
});

describe('Test the JumpID regex', () =>
{
    {
        test('Try out a valid string', () =>
        {
            let testString = "HPE.com/blah-blah?jumpid=bm_u7tkh3";
            expect(Excercises.ParseJumpIdFromString(testString)).toBe("bm_u7tkh3");
        });
    
        test('Try out a non-valid string', () =>{
            let testString = "Not a valid jumpid="
            expect(Excercises.ParseJumpIdFromString(testString)).toBe(null);
        });
    }
});
