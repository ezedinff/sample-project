import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  registrationForm!: FormGroup;
  cities: Array<{id: number; name: string}> = [];
  countries = [
    {
      id: 1,
      name: "Ethiopia",
      cities: [
        {
          id: 1,
          name: "Addis Ababa"
        },
        {
          id: 2,
          name: "Bahir Dar"
        }
      ]
    },
    {
      id: 2,
      name: "Sudan",
      cities: [
        {
          id: 3,
          name: "Kahrtum"
        }
      ]
    },
    {
      id: 3,
      name: 'Djibouti',
    }
  ];
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: [
        "",
        Validators.required,
        Validators.min(2),
        Validators.max(15)
      ],
      lastName: '',
      gender: '',
      email: '',
      password: '',
      role: '',
      birthDate: '',
      address: this.formBuilder.group({
        country: '',
        city: ''
      })
    });

    (this.registrationForm.get("address") as FormGroup) // get address form group
      .get("country") // get country form control from address form group
      ?.valueChanges.subscribe( // listen for any changes
        (countryId) => {
      this.cities = this.countries.find(country => country.id == countryId)?.cities ?? [];
    });
  }

  handleSubmit() {
    if (this.registrationForm.valid) {
      // TODO: create a new user
      this.registrationForm.valueChanges.subscribe(values => {
        console.log(values);
      })
    }
  }
}
