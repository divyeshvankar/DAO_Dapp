import { useState,useEffect } from "react";

function ProposalList({state}){
   const  [proposals,setProposals]=useState([]);
   useEffect(()=>{
      const {contract}=state;
      // console.log(contract);
      async function proposals(){
         const arrayProposal = await contract.methods.ProposalList().call();
         setProposals(arrayProposal);
         console.log(arrayProposal);
      }
      contract && proposals();
   },[state]);
   return<>
   <div className="list">
    <h3>Proposal List</h3>
    <table>
   <tbody>

   { proposals.map((proposal)=>{
      //  uint amount;
      //  address payable receipient;
      //  uint votes;
      //  uint end;
      //  bool isExecuted;
      return (<tr key={proposal.id}>
      <td>
         {proposal.id}
         </td> 
       <td>
         {proposal.description}
         </td>
        <td>
         {proposal.amount}
         </td>
        <td>
          {proposal.receipient}
         </td>
         <td>
             {proposal.votes}
            </td>
         <td>
             {proposal.end}
            </td>
         <td>
             {proposal.isExecuted}
            </td>

          </tr>
    )
   })}
   </tbody>
   </table>
   </div>
   </>
  }
  export default ProposalList;