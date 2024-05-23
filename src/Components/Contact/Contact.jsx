const Contact = () => {
    return (
        <section className="contact-box text-center h-[80vh] flex flex-col justify-center items-center " style={{background:"linear-gradient(45deg,white 50%,#9C9EFE 50%)"}}>
             <div  className="bg-purple-200 shadow-[0px_0px_10px_3px_black] w-fit p-4">
             <h1 className="text-[33px] font-bold ">Contact Me</h1>
             <p className="-[18px] min-[400px]:text-[23px]"><span className="font-semibold text-[20px] min-[400px]:text-[25px] " >Created By:-</span>Pratik Dayma</p>
             <p className=" text-[18px] min-[400px]:text-[23px]"><span className="font-semibold text-[20px] min-[400px]:text-[25px] " >Email:-</span>pratikdayma55@gmai.com</p>
             <p className=" text-[18px] min-[400px]:text-[23px]"><span className="font-semibold text-[20px] min-[400px]:text-[25px] " >Github:-</span>DaymaPratik</p>
             <p className=" text-[18px] min-[400px]:text-[23px]"><span className="font-semibold text-[20px] min-[400px]:text-[25px] " >Phone No:-</span>7028534928</p>
             </div>
        </section>
    );
}

export default Contact;
