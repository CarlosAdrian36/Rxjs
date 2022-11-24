import { GithubUser } from "./github-user.interface";

export interface GithubusersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}


