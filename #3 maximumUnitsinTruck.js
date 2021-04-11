// You are assigned to put some amount of boxes onto one truck. 
// You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.
//  Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
//  Output: 8

boxTypes = [[1,3],[2,2],[3,1]];
truckSize = 4;
console.log(maximumUnits(boxTypes, truckSize));

function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort(function(a,b){return (a[1] < b[1]) ? 1 : -1;}); //sorts the 2D array based on 2nd value decreasingly
    let i=0;
    let ans=0;
    while(truckSize>0 && i<boxTypes.length) {
      if(boxTypes[i][0] > 0) {
        ans = ans + boxTypes[i][1];
        truckSize--;
        boxTypes[i][0]--;
      }
      else {
        i++;
      }
    }
    return ans;
};