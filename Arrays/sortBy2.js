function sortBy2(arr){
    arr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(arr.join("\n"))
}
sortBy2(['alpha', 
'beta', 
'gamma']
)