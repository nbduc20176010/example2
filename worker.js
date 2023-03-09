onmessage = (e) => {
    if (e.data.type === "text/plain") {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            let content = fileReader.result;
            let subcontent = content.toLowerCase().replace(/[^a-zA-Z ]/g, "")
            let res = subcontent.split(" ");
            if (res.length < 3) {
                postMessage("too little words");
            } else {
                let mostRepeatWord = [];
                for (let i = 0; i < res.length; i++) {
                    let index = mostRepeatWord.indexOf(mostRepeatWord.find(item => item.data === res[i]))
                    if (index !== -1) {
                        mostRepeatWord[index].count++;
                    } else {
                        mostRepeatWord.push({ data: res[i], count: 1 })
                    }
                }
                mostRepeatWord.sort((a, b) => b.count - a.count);
                let result = mostRepeatWord.slice(0, 3).map(item => item.data + " - " + item.count)
                postMessage(result.join('<br>'));
            }
        }
        fileReader.readAsText(e.data);

    } else {
        postMessage("not txt file");
    }
}