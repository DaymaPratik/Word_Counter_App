const About = () => {
    return (
        <main className="main-box h-[90vh] flex items-center justify-center" style={{background:"linear-gradient(45deg,white 50%,#9C9EFE 50%)"}}>
           <div className="details-box w-[70%] border-2 border-purple-500">
           <details>
                <summary className="p-4 text-[25px] border-b-2 border-purple-500 font-semibold transition hover:text-white duration-200 ease-in hover:bg-purple-600" style={{listStyle:"none"}}>Analyse Your Text</summary>
                <p className="p-4 text-[23px] border-b-2 bg-purple-300 border-purple-500">Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
            </details>
            <details>
                <summary className="p-4 text-[25px] border-b-2 border-purple-500 font-semibold transition hover:text-white duration-200 ease-in hover:bg-purple-600"  style={{listStyle:"none"}}>Free To Use</summary>
                <p className="p-4 text-[23px] border-b-2 bg-purple-300 border-purple-500">TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</p>
            </details>
            <details>
                <summary className="p-4 text-[25px] font-semibold transition hover:text-white duration-200 ease-in hover:bg-purple-600"  style={{listStyle:"none"}}>Browser Compitable</summary>
                <p className="p-4 text-[23px] border-b-2 bg-purple-300 border-purple-500">This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.</p>
            </details>
           </div>
        </main>
    );
}

export default About;
