import { Button, Checkbox, Datepicker, Label, Select, TextInput } from "flowbite-react";

export default function page() {
  return (
    <main className="bg-gray-200">
      <div className="container mx-auto p-10 bg-white h-screen">
        <h3 className="text-[#253C95] mb-5 uppercase text-center font-bold md:text-4xl text-2xl">
          Enroll
        </h3>
        <form className="grid grid-cols-2 gap-4 uppercase">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullname" value="Full Name (EN)" />
            </div>
            <TextInput id="fullname" placeholder="Seakngim" type="text" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="gender" value="Gender" />
            </div>
            <Select id="gender" required>
              <option>Female</option>
              <option>Male</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput
              id="phone"
              placeholder="964343206 (Telegram)"
              addon="+855"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Date Birth" />
            </div>
            <Datepicker className="z-0"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="education" value="Education" />
            </div>
            <Select id="education" required>
              <option>First year</option>
              <option>Second year</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="pob" value="Place of birth" />
            </div>
            <Select id="pob" required>
              <option>Kandal</option>
              <option>Phnom Penh</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="university" value="University" />
            </div>
            <Select id="university" required>
              <option>First year</option>
              <option>Second year</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="currentaddress" value="Current Address" />
            </div>
            <Select id="currentaddress" required>
              <option>Phnom Penh</option>
              <option>Kandal</option>
            </Select>
          </div>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </div>
    </main>
  );
}
