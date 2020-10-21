import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {Tweet} from "../entity/Tweet";

export const emptyTable = async () => {
    console.log("===emptyTable===");
    const userRepo = getRepository(User);
    const tweetRepo = getRepository(Tweet);

    await tweetRepo.delete({});
    await userRepo.delete({});
};
