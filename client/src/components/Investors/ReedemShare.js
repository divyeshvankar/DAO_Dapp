import "./investors.css"
function ReedemShare({state,account}){
    async function reedmShares(event){
        try{

            event.preventDefault();
            const {contract}=state;
            const shares = document.querySelector("#shares").value;
            
            // console.log(amount);
            await contract.methods.reedemShare(shares).send({from : account,gas:480000});
        } catch (error){
            alert(error);
        }
        window.location.reload();
    }
    return<><form onSubmit={reedmShares}>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;