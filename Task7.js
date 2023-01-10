//26 . Удалить дубликаты из отсортированного массива

/**
 * Учитывая целочисленный массив, numsотсортированный в неубывающем порядке , удалите дубликаты на месте , чтобы каждый уникальный элемент появлялся только один раз . Относительный порядок элементов должен быть сохранен .

Поскольку в некоторых языках невозможно изменить длину массива, вместо этого вы должны поместить результат в первую часть массива nums. Более формально, если есть kэлементы после удаления дубликатов, то первые kэлементы nums должны содержать окончательный результат. Неважно, что вы оставите за пределами первых  k элементов.

Возврат kпосле размещения конечного результата в первых kслотахnums .

Не выделяйте дополнительное пространство для другого массива. Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O (1).
 */

/**
 *  

Пример 1:

Ввод: nums = [1,1,2]
 Вывод: 2, nums = [1,2,_]
 Объяснение: Ваша функция должна возвращать k = 2, причем первые два элемента nums равны 1 и 2 соответственно. 
Неважно, что вы оставляете за возвращенным k (следовательно, это символы подчеркивания).
Пример 2:

Ввод: числа = [0,0,1,1,1,2,2,3,3,4]
 Выход: 5, числа = [0,1,2,3,4,_,_,_,_, _]
 Объяснение: Ваша функция должна возвращать k = 5, причем первые пять элементов nums равны 0, 1, 2, 3 и 4 соответственно. 
Неважно, что вы оставляете за возвращенным k (следовательно, это символы подчеркивания).
 */

let removeDublicates = (nums) => {
  let insertIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++; 
    }
  }
};

