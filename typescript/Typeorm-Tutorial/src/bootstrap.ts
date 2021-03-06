import { getRepository } from "typeorm";
import { User } from "./entity/User";
import {Tweet} from "./entity/Tweet";

export const Bootstrap = async () => {
    console.log("===Bootstrap===");
    const userRepo = getRepository(User);
    const user = userRepo.create({
        firstName: "Alex",
        lastName: "Brooks",
        age: 22,
    });
    await userRepo.save(user).catch((err) => console.log("Error: ", err));
    console.log("New User Saved: ", user);

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = "I finally got a new Job!";
    tweet.content = "Well after a long time I landed my dream job on Netflix";
    tweet.user = user;
    await tweetRepo.save(tweet).catch((err) => console.log(err));
    console.log("New tweet Saved: ", tweet);
};
