import { useState } from "react";
const Home = () => {

   let [ipText,setIpText]=useState('');
   let [countWords,setCountWords]=useState(0);
   let [countChar,setCountChar]=useState(0);
   let [countTime,setCountTime]=useState(0);


   function onChangeFunct(e){
    let text=e.target.value;
    setIpText(text)
    setCountChar(text.length);
    // setCountChar(countChar+1);   both setCountChar in line 13 and 12 have same function to count charcters
    countWordFunction(text);
   }

   function countWordFunction(text){
    const wordsArr = text.trim().split(/\s+/);                //array of all words present in the text
    let filteredArr=wordsArr.filter(word => word.length > 0);//filtered array consist only elements which have no spaces in it
    let count=filteredArr.length;                             //flitered array length is simply hte count of words in the text
    setCountWords(count);                                     //Setting the count
    let avgReadingSpeed=200;
    let time=count/avgReadingSpeed;
    setCountTime(time);
   }


   function upperCase(){
    setIpText(ipText.toLocaleUpperCase());
   }
   function lowerCase(){
    setIpText(ipText.toLocaleLowerCase());
   }
   function clearText(){
    setIpText("");
   }

   function copyText(event){
    if(ipText===""){
        alert("Please Generate Password First...");
        return;
    }
    navigator.clipboard.writeText(ipText);
    event.preventDefault(); // Prevent default behavior (text selection)
    setIpText("");
}
function removeSpaces(){
    const text=ipText.trim();
    setCountChar(text.length)
    setIpText(text);
}



    return (
        <main className="main-box" style={{background: "linear-gradient(45deg, white 50%, #9C9EFE calc(50% + 1px))"}} >
            <h2 className="text-[20px] min-[400px]:text-[25px] min-[768px]text-[30px] p-3 text-center font-bold">Word Counter,Charcter Counter,Remove Extra Spaces</h2>


            <section className="main-ip-box  w-[95%] mx-auto p-2 min-[768px]:p-5">
                 <label htmlFor="ip-text" className="  block text-[20px] min-[400px]:text-[25px] min-[768px]text-[30px]  font-semibold p-3">Enter Your Text Here:-</label>
                 <textarea  id="ip-text" rows="8" className=" w-[100%] block text-[25px] p-3 border-2 border-[#9C9EFE]" value={ipText} onChange={(e)=>{onChangeFunct(e)}}>

                 </textarea>
                 <div className="main-ip-btn-box text-[15px] min-[600px]:text-[18px] min-[768px]:text-[20px] font-semibold">
                    <button className=" p-[5px] border-2 border-purple-500 m-[7px] transition hover:text-white duration-200 ease-in hover:bg-purple-600" onClick={upperCase}>Convert To Upper Case</button>
                    <button className=" p-[5px] border-2 border-purple-500 m-[7px] transition hover:text-white duration-200 ease-in hover:bg-purple-600" onClick={lowerCase}>Convert To Lower Case</button>
                    <button className=" p-[5px] border-2 border-purple-500 m-[7px] transition hover:text-white duration-200 ease-in hover:bg-purple-600" onClick={copyText}>Copy To Clipboard</button>
                    <button className=" p-[5px] border-2 border-purple-500 m-[7px] transition hover:text-white duration-200 ease-in hover:bg-purple-600" onClick={removeSpaces}> Remove Extra Spaces</button>
                    <button className=" p-[5px] border-2 border-purple-500 m-[7px] transition hover:text-white duration-200 ease-in hover:bg-purple-600" onClick={clearText}>Clear Text</button>
                 </div>
            </section>



            <section className=" w-[95%] mx-auto  p-5 main-text-details">
                   <h3 className="text-[20px] min-[400px]:text-[25px] min-[768px]:text-[28px] font-bold ">Summary Of Your Text</h3>
                   <p className="text-[19px] min-[400px]:text-[22px] min-[768px]:text-[25px] my-[7px]">Number of Words:-{countWords}</p>
                   <p className="text-[19px] min-[400px]:text-[22px] min-[768px]:text-[25px] my-[7px]">Number of Characters:-{countChar}</p>
                   <p className="text-[19px] min-[400px]:text-[22px] min-[768px]:text-[25px] my-[7px]">Reading Time:-{countTime}</p>
            </section>




            <section className="main-op-box w-[95%] mx-auto p-5">
                <textarea cols="30" rows="5" value={ipText} className="border-2 border-black block text-[20px] w-[100%] p-2 min-[768px]:p-5" readOnly></textarea>
            </section>
        </main>
    );
}

export default Home;
