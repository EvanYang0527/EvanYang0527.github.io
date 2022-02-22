fetch('https://evanyang0527.github.io/Homework1/data.json')
    .then(function (response) {
        return response.json();
    }).then(function (apiJsonData) {
        console.log(apiJsonData);
        renderDataInTheTable(apiJsonData);
    })

function renderDataInTheTable(todos) {
    const section2table = document.getElementById("section2");
    let section2 = document.createElement("tr");
    todos["section2"].forEach(todo => {
        let cell = document.createElement("td");
        let div = document.createElement("div");
        div.className = "section2div"
        let img = document.createElement("img")
        img.className = "section2img";
        img.src = todo["image"]
        let p3 = document.createElement("p");
        p3.className = "contentstyle";
        p3.innerText = todo["heading"];
        let p = document.createElement("p");
        p.className = "contentstylesmall";
        p.innerText = todo["text"];
        div.appendChild(img);
        div.appendChild(p3);
        div.appendChild(p);
        
        cell.appendChild(div);
        section2.appendChild(cell);
    })
    section2table.appendChild(section2);

    const section3table = document.getElementById("section3");
    let section3 = document.createElement("tr");
    let cell = document.createElement("td");
    cell.className = "section3left";
    todos["section3"]["text"].forEach(todo => {
        let p = document.createElement("p");
        p.innerText = todo;
        p.className = "section3content";
        cell.appendChild(p);
    })
    section3.appendChild(cell)
    let cell2 = document.createElement("td");
    let img = document.createElement("img");
    img.src = "lasky.png";
    img.className = "section3img"
    cell2.appendChild(img);
    section3.appendChild(cell2);
    section3table.appendChild(section3);
    
    const section4table1 = document.getElementById("section4up");
    let up = document.createElement("tr");
    let left = document.createElement("td");
    let upimg = document.createElement("img");
    upimg.src = todos["section4"][0]["image"];
    upimg.className = "section4upimg"
    left.appendChild(upimg);
    up.appendChild(left);

    let right = document.createElement("td");
    let uptitle = document.createElement("p");
    uptitle.innerText = todos["section4"][0]["heading"];
    uptitle.className = "section4titleup";
    right.appendChild(uptitle);
    let upcontent = document.createElement("p");
    upcontent.innerText = todos["section4"][0]["text"];
    upcontent.className = "section4content";
    right.appendChild(upcontent);
    up.appendChild(right);
    section4table1.appendChild(up);


    const section4table2 = document.getElementById("section4down");
    let down = document.createElement("tr");
    let downleft = document.createElement("td");
    let downimg = document.createElement("img");
    downimg.src = todos["section4"][1]["image"];
    downimg.className = "section4img"
    downleft.appendChild(downimg);

    let downright = document.createElement("td");
    downright.className = "section4location";
    let downtitle = document.createElement("p");
    downtitle.className = "section4title";
    downtitle.innerText = todos["section4"][1]["heading"];
    downright.appendChild(downtitle);
    let downcontent = document.createElement("p");
    downcontent.innerText = todos["section4"][1]["text"];
    downcontent.className = "section4content";
    downright.appendChild(downcontent);
    down.appendChild(downright);
    down.appendChild(downleft);
    section4table2.appendChild(down);
    
    
    
    
    
}