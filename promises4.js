var ans = new Promise((res, rej) => {
    return res("sabse phle ghr aou ");
});
ans.then((data) => {
    console.log(data);

    return new Promise((res, rej) => {
        return res("gate kholo aur gate lagou");
    }).then((data) => {
        console.log("gate kholo aur gate lagoau");
        return new Promise((res) => {
            return res("khana kpakaou aur khaou");
        }).then(() => {
            console.log("khana khaou khana pkaou ");
        });
    });
});
