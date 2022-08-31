function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector("textarea").value);
      let bestRestaurantOutput = document.querySelector("#bestRestaurant p");
      let workersOutput = document.querySelector("#workers p");
      let restaurants = {};
      let avarageSalary = [];

      for (let line of input) {
         let [restaurant, ...others] = line.split(" - ");
         let workers = others.map((worker) => {
            worker = worker.split(", ");
            worker.forEach((item) => {
               let [name, salary] = item.split(" ");
               if (!restaurants.hasOwnProperty(restaurant))
                  restaurants[restaurant] = [];
               restaurants[restaurant].push({ name, salary });
            });
         });
      }

      for (let el in restaurants) {
         let currentAvg = restaurants[el].reduce((a, b) => {
            return +b.salary + a;
         }, 0);
         currentAvg /= restaurants[el].length;
         currentAvg = currentAvg;
         avarageSalary.push({ name: el, avarage: currentAvg });
      }

      let bestRestaurant = avarageSalary.sort(
         (a, b) => b.avarage - a.avarage
      )[0];

      let sortedWorkers = restaurants[bestRestaurant.name].sort(
         (a, b) => b.salary - a.salary
      );

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avarage.toFixed(2)} Best Salary: ${(+sortedWorkers[0].salary).toFixed(2)}`;

      for (let worker of sortedWorkers) {
         workersOutput.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
   }
}