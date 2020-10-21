import {getRepository} from "typeorm";
import {User} from "../entity/User";

export const lazyLoad = async () => {
    console.log("===lazyLoad===");
    const userRepo = getRepository(User);

    const user = await userRepo
        .findOne({ where: { firstName: "Alex" } })
        .catch((err) => {
            console.log(err);
        });

    if (user) console.log("User: ", user);

    if (user) console.log("Tweets", await user.tweets);
};
