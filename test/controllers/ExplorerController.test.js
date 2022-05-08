const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Prueba de unidad de para ExplorerController", () => {
    test("1) Obtener explorers por misión", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBeGreaterThanOrEqual(10);
    });
    test("2) Obtener explorers nombres de los explorers", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers).toContain("ajolonauta11");
    });
    test("3) Obtener explorers el total de explorers", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorers).toBe(10);
    });
});