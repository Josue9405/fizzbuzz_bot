class ExplorerService{
    static filterByMission(explorers, mission){
        if(Array.isArray(explorers) && explorers.length > 0){
            if (explorers.filter((explorer) => explorer.mission == mission).length > 0)
                return explorers.filter((explorer) => explorer.mission == mission);
            else
                return "No hay exploradores en la mision "+mission;
        }
        else
            return "No hay exploradores";
    }

    static getAmountOfExplorersByMission(explorers, mission){
        if(!Array.isArray(this.filterByMission(explorers,mission)))
            return 0;
        else
            return this.filterByMission(explorers,mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        if(!Array.isArray(this.filterByMission(explorers, mission)))
            return this.filterByMission(explorers, mission);
        else
            return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }

    static getExplorersNameByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers,mission);
        let explorersNames = "";
        if (Array.isArray(explorersInMission)){
            explorersInMission.forEach(explorer => {
                if (explorersNames.length == 0){
                    explorersNames = explorer.name;
                }else{
                    explorersNames = explorersNames + "," + explorer.name;
                }
            });
            return explorersNames;
        }else{
            return explorersInMission;
        }
    }

    static getExplorersMissions(explorers){
        if(Array.isArray(explorers) && explorers.length > 0){
            let missions = new Array();
            explorers.forEach(explorer => {
                if (!missions.includes(explorer.mission)){
                    missions.push(explorer.mission);
                }
            });
            return missions;
        }
        else
            return "No hay exploradores";
    }
}

module.exports = ExplorerService;