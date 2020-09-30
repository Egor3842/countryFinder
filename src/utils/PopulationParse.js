export const PopulationNumber = (population) => {
    let  populationFormat = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return populationFormat
}