let HeadCount = 0;
    let TailCount = 0;

    while (HeadCount < 11 | TailCount < 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if (toss == 1) {
            HeadCount++;
        }
        else {
            TailCount++;
        }

    }
    console.log("Head Count :" + HeadCount);
    console.log("Tail Count :" + TailCount);
