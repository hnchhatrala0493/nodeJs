const asyncHandler=require("express-async-handler");

const Projects =require("../models/projectModel");

const getProjects= asyncHandler(async(req,res)=>{
    const projects= await Projects.find();
    res.status(200).json(projects);
});

const getProjectsDetails= asyncHandler(async(req,res)=>{
    const projectsDetails = await Projects.findById(req.params.id);
    res.status(200).json(projectsDetails);
});

const createProjects=asyncHandler(async(req,res)=>{
    const {name,type} = req.body;
    if(!name || !type){
        res.status(400);
        throw new Error("All Field Required.");
    }
    const projects = await Projects.create({
        name,
        type
    });
    res.status(201).json(projects);
});


const UpdateProjects=asyncHandler(async(req,res)=>{
    const projects = await Projects.findById(req.params.id);
    if(!projects){
        res.status(404);
        throw new Error("Contact not Found.");
    }
    const Updateproject = await Projects.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(201).json(Updateproject);
});


const DeleteProjects=asyncHandler(async(req,res)=>{
    const projects = await Projects.findById(req.params.id);
    if(!projects){
        res.status(404);
        throw new Error("Contact not Found.");
    }
    await Projects.deleteOne();
    res.status(201).json(projects);
});

module.exports={getProjects,getProjectsDetails,createProjects,UpdateProjects,DeleteProjects};