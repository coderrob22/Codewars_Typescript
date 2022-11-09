// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



export function bmi(weight: number, height: number): string {
    if (weight/height**2 <= 18.5){
      return 'Underweight'
    }else if (weight/height**2 > 18.5 && weight/height**2 <= 25.0){
      return 'Normal'
    }else if (weight/height**2 > 25.0 && weight/height**2 <= 30.0){
      return 'Overweight'
    }else{
      return 'Obese'
    };
    
  }

//Switch Case
export function bmi(weight: number, height: number): string {
    let bmi = weight / height ** 2;
    switch (true) {
      case (bmi <= 18.5):
        return 'Underweight';
        break;
      case (bmi <= 25):
        return 'Normal'
        break;
      case (bmi <= 30.0):
        return "Overweight";
        break;
      case (bmi > 30):
        return 'Obese';
        break;
      default:
        return 'other';
        break;
    }
  }