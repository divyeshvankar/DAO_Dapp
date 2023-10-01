import {useState,useEffect} from "react"
function InvestorList({state}){
   const [investors,setInvestors]=useState([]);
   useEffect(()=>{
      const {contract}=state;
      // console.log(contract);
      async function investorList(){
         const arrayInvestor = await contract.methods.InvestorList().call();
         console.log(arrayInvestor);
         setInvestors(arrayInvestor);
      }
      contract && investorList();
   },[state]);
   return<>
    <div className="list">
    <h3>Investor's List</h3>
    { investors.map((investor)=>{
    return <p key={investor}>
       {investor}
    </p>
   })}
    </div>
   </>
  }
  export default InvestorList;