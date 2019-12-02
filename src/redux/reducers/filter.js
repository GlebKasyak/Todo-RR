import { CHANGE_FILTER } from "../../constants";

const BASE_FILTER = "all";

const filters = (state = BASE_FILTER, { type, actionFilter }) => {
    switch(type) {
        case CHANGE_FILTER:
            return actionFilter;
        default:
            return state
    }
};

export default filters;