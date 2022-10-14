"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const collectUserData_1 = require("./service/collectUserData");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    let data;
    try {
        data = (0, collectUserData_1.collectUserData)(Object.assign({}, req.query));
    }
    catch (error) {
        res.status(400);
        res.send("Check your params");
    }
    res.send(data);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map