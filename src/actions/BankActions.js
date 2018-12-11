export async function getAllBanks() {
    try {
      let response = await fetch(encodeURI("https://api.techm.co.in/api/listbanks"));
      return await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
};

export async function getAllBranches(bankName="") {
  try {
    let uri = "https://api.techm.co.in/api/listbranches/" + bankName;
    let response = await fetch(encodeURI(uri));
    return await response.json();
  }
  catch (err) {
    console.log('fetch failed', err);
  }
};

export async function getBankByIFSC(ifsc) {
  try {
    let uri = "https://api.techm.co.in/api/v1/ifsc/" + ifsc;
    let response = await fetch(encodeURI(uri));
    return await response.json();
  }
  catch (err) {
    console.log('fetch failed', err);
  }
};

export async function getBankByBankNameAndBranchName(bankName, branchName) {
  try {
    let uri = "https://api.techm.co.in/api/getbank/" + bankName + "/" + branchName;
    let response = await fetch(encodeURI(uri));
    return await response.json();
  }
  catch (err) {
    console.log('fetch failed', err);
  }
};

