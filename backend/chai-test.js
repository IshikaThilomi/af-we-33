const chai=require('chai');
const { response } = require('express');
const expect = chai.expect;
var Request=require("request");

describe("Reviewer Controller",()=>{
    var server; 
    describe("Test Case To Check If  get all pending research function is working properly",async ()=>{
        var data={};
        server=require("./server");
        Request.get("http://localhost:8089/reviewer/get_all_pending_reseach_pappers",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check If Status Code Is Not Equal To 404.", ()=>{
            expect(data.status).to.not.equal(404);
        })
    })
})

describe("Reviewer Controller",()=>{
    var server; 
    describe("Test Case To Check If Update Workshop is Working Without a request BODY, if it works the function is wrong ",async ()=>{
        var data={};
        server=require("./server");
        Request.put("http://localhost:8089/reviewer/update_workshops_by_id",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check if response equals to fail", ()=>{
            expect(data.body).to.equal("fail");
        })
    })
})


describe("Reviewer Controller",()=>{
    var server; 
    describe("Test Case To Check If Update Research is Working Without a request BODY, if it works the function is wrong ",async ()=>{
        var data={};
        server=require("./server");
        Request.put("http://localhost:8089/reviewer/update_researsh_by_id",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check if response equals to fail", ()=>{
            expect(data.body).to.equal("fail");
        })
    })
})

describe("Admin Dashboard Controller",()=>{
    var server; 
    describe("Test Case To Check If Admin Dashbaord Get Status Function is Working Properly",async ()=>{
        var data={};
        server=require("./server");
        Request.get("http://localhost:8089/admindash/getStatus",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check If Status Code Is Not Equal To 404.", ()=>{
            expect(data.status).to.not.equal(404);
        })
    })
})

describe("Admin Conference",()=>{
    var server; 
    describe("Test Case To Check If Manage Conference is Working Without a request BODY, if it works the function is wrong ",async ()=>{
        var data={};
        server=require("./server");
        Request.put("http://localhost:8089/adminconference/manageconference",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check if response equals to fail", ()=>{
            expect(data.body).to.equal("fail");
        })
    })
})

describe("Admin Conference",()=>{
    var server; 
    describe("Test Case to Check if Function is link for Get all declined Confereces is working Properly",async ()=>{
        var data={};
        server=require("./server");
        Request.get("http://localhost:8089/adminconference/get_all_declined_conferences",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check If Status Code Is Not Equal To 404.", ()=>{
            expect(data.status).to.not.equal(404);
        })
    })
})

describe("Conference Controller",()=>{
    var server; 
    describe("Test Case To Check The GET Request To Get All The Approved Conferences",async ()=>{
        var data={};
        server=require("./server");
        Request.get("http://localhost:8089/conference/get_all_approved_Conferences",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check If Status Code Is Not Equal To 404.", ()=>{
            expect(data.status).to.not.equal(404);
        })
    })
})

describe("Event Controller",()=>{
    var server; 
    describe("Test Case Check If Register Presneter Works without a file",async ()=>{
        var data={};
        server=require("./server");
        Request.post("http://localhost:8089/events/register_presenter",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check if Response is equal to fail", ()=>{
            expect(data.body).to.equal("fail");
        })
    })
})

describe("Event Controller",()=>{
    var server; 
    describe("Test Case To Check If we Sucessfully Get The Approved Research pappers",async ()=>{
        var data={};
        server=require("./server");
        Request.get("http://localhost:8089/events/get_approved_research_pappers",(error,response,body)=>{
            data.status=response.statusCode
            data.body=body;          
        })
        it("Check If Status Code Is Not Equal To 404.", ()=>{
            expect(data.status).to.not.equal(404);
        })
    })
})

