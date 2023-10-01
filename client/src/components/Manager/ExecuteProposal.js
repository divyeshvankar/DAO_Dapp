import "./manager.css"
function ExecuteProposal({state,account}){
    // console.log(contract);
    async function proposalExecute(event){
        try{

            event.preventDefault();
            const {contract}=state;
            const proposalId = document.querySelector("#id");
              await contract.methods.executeProposal(proposalId).send({from : account,gas:480000});
        } catch (error){
            alert(error);
        }
        window.location.reload();
      }
      
    return<><form onSubmit={proposalExecute}>
    <label className="label1" htmlFor="proposalId">
    <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="id"></input>
    <button className="button" type="submit">Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;