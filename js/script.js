// ------------------------ (child-o-1 ------------------------
var child_o_1 = document.getElementById('child-o-1')
var child_o_2 = document.getElementById('child-o-2')
var child_o_3 = document.getElementById('child-o-3')
var child_o_4 = document.getElementById('child-o-4')
// ------------------------ child-o-1-img) ------------------------
var child_o_1_img = document.getElementById('child-o-1-img')
var child_o_2_img = document.getElementById('child-o-2-img')
var child_o_3_img = document.getElementById('child-o-3-img')
var child_o_4_img = document.getElementById('child-o-4-img')
// ------------------------ (child-o-1-img ------------------------
// ------------------------ child-o-1) ------------------------
// ****************************************************************************
// ------------------------ (child-x-1 ------------------------
var child_x_1 = document.getElementById('child-x-1')
var child_x_2 = document.getElementById('child-x-2')
var child_x_3 = document.getElementById('child-x-3')
var child_x_4 = document.getElementById('child-x-4')
// ------------------------ child-x-1-img) ------------------------
var child_x_1_img = document.getElementById('child-x-1-img')
var child_x_2_img = document.getElementById('child-x-2-img')
var child_x_3_img = document.getElementById('child-x-3-img')
var child_x_4_img = document.getElementById('child-x-4-img')
// ------------------------ (child-x-1-img ------------------------
// ------------------------ child-x-1) ------------------------
// ****************************************************************************
// ------------------------ (Game-board ------------------------
// ------------ (top ------------
var top_left = document.getElementById('top-left')
var top_center = document.getElementById('top-center')
var top_right = document.getElementById('top-right')
// ------------ top) ------------
// ------------ (center ------------
var center_left = document.getElementById('center-left')
var center_center = document.getElementById('center-center')
var center_right = document.getElementById('center-right')
// ------------ center) ------------
// ------------ (bottom ------------
var bottom_left = document.getElementById('bottom-left')
var bottom_center = document.getElementById('bottom-center')
var bottom_right = document.getElementById('bottom-right')
// ------------ bottom) ------------
// ------------------------ Game-board) ------------------------
// ****************************************************************************
// ------------------------ (child-o-1-img ------------------------
child_o_1_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-o-1-img"))
child_o_2_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-o-2-img"))
child_o_3_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-o-3-img"))
child_o_4_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-o-4-img"))
// ------------------------ child-o-1-img) ------------------------
// ------------------------ (child-x-1-img ------------------------
child_x_1_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-x-1-img"))
child_x_2_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-x-2-img"))
child_x_3_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-x-3-img"))
child_x_4_img.addEventListener("dragstart" , (e) => e.dataTransfer.setData("text", "child-x-4-img"))
// ------------------------ child-x-1-img) ------------------------
// ****************************************************************************
// ------------ (clear-o ------------
child_o_1_img.addEventListener('dblclick' , ()=>{
    child_o_1.appendChild(child_o_1_img)
})
child_o_2_img.addEventListener('dblclick' , ()=>{
    child_o_2.appendChild(child_o_2_img)
})
child_o_3_img.addEventListener('dblclick' , ()=>{
    child_o_3.appendChild(child_o_3_img)
})
child_o_4_img.addEventListener('dblclick' , ()=>{
    child_o_4.appendChild(child_o_4_img)
})
// ------------ clear-o) ------------
// ------------ (return-it-x ------------
child_x_1_img.addEventListener('dblclick' , ()=>{
    child_x_1.appendChild(child_x_1_img)
})
child_x_2_img.addEventListener('dblclick' , ()=>{
    child_x_2.appendChild(child_x_2_img)
})
child_x_3_img.addEventListener('dblclick' , ()=>{
    child_x_3.appendChild(child_x_3_img)
})
child_x_4_img.addEventListener('dblclick' , ()=>{
    child_x_4.appendChild(child_x_4_img)
})
// ------------ return-it-x) ------------
// ****************************************************************************
// ------------ (top ------------
// ------------ (top_left ------------
top_left.addEventListener("dragover" ,(e)=> e.preventDefault())
top_left.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    top_left.appendChild(element)
})
// ------------ top_left) ------------
// ------------ (top_center ------------
top_center.addEventListener("dragover" ,(e)=> e.preventDefault())
top_center.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    top_center.appendChild(element)
})
// ------------ top_center) ------------
// ------------ (top_right ------------
top_right.addEventListener("dragover" ,(e)=> e.preventDefault())
top_right.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    top_right.appendChild(element)
})
// ------------ top_right) ------------
// ------------ top) ------------
// ****************************************************************************
// ------------ (center ------------
// ------------ (center_left ------------
center_left.addEventListener("dragover" ,(e)=> e.preventDefault())
center_left.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    center_left.appendChild(element)
})
// ------------ center_left) ------------
// ------------ (center_center ------------
center_center.addEventListener("dragover" ,(e)=> e.preventDefault())
center_center.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    center_center.appendChild(element)
})
// ------------ center_center) ------------
// ------------ (center_right ------------
center_right.addEventListener("dragover" ,(e)=> e.preventDefault())
center_right.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    center_right.appendChild(element)
})
// ------------ center_right) ------------
// ------------ center) ------------
// ****************************************************************************
// ------------ (bottom ------------
// ------------ (bottom_left ------------
bottom_left.addEventListener("dragover" ,(e)=> e.preventDefault())
bottom_left.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    bottom_left.appendChild(element)
})
// ------------ bottom_left) ------------
// ------------ (bottom_center ------------
bottom_center.addEventListener("dragover" ,(e)=> e.preventDefault())
bottom_center.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    bottom_center.appendChild(element)
})
// ------------ bottom_center) ------------
// ------------ (bottom_right ------------
bottom_right.addEventListener("dragover" ,(e)=> e.preventDefault())
bottom_right.addEventListener("drop" , (e) =>{
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    bottom_right.appendChild(element)
})
// ------------ bottom_right) ------------
// ------------ bottom) ------------
// ****************************************************************************