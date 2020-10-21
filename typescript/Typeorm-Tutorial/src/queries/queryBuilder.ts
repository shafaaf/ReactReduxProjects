import {getRepository} from "typeorm";
import {User} from "../entity/User";

export const QueryBuilder = async () => {
    console.log("===QueryBuilder===");
    const user = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.firstName = :firstName", { firstName: "Alex" })
        .getOne();

    console.log("user: ", user);
    console.log("Tweets: ", user.tweets); ///< undefined
};
