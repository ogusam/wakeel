import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import wakeel_img from '../assets/wakeel_img.png'
import pos1 from '../assets/pos1.jpg'
 function Form() {


    
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [tinNumber, setTinNumber] = useState("");
  const [isTinValid, setIsTinValid] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    registrationNumber: ""
  });
  const [signatoryDetails, setSignatoryDetails] = useState({
    bvn: "",
    placeOfBirth: "",
    gender: "",
    address: "",
    phone: "",
    idDocument: ""
  });
  const [locationDetails, setLocationDetails] = useState({
    localGovernment: "",
    state: ""
  });


  const [errors, setErrors] = useState({});

  const validateStep3 = () => {
    const newErrors = {};
    if (!businessInfo.name) newErrors.name = "Business Name is required";
    if (!businessInfo.address) newErrors.address = "Address is required";
    if (!businessInfo.email) newErrors.email = "Email is required";
    if (!businessInfo.phone) newErrors.phone = "Phone Number is required";
    if (!businessInfo.registrationNumber) newErrors.registrationNumber = "Registration Number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const validate = () => {
    const newErrors = {};
    if (!signatoryDetails.bvn) newErrors.bvn = "BVN is required";
    if (!signatoryDetails.placeOfBirth) newErrors.placeOfBirth = "Place of Birth is required";
    if (!signatoryDetails.gender) newErrors.gender = "Gender is required";
    if (!signatoryDetails.address) newErrors.address = "Address is required";
    if (!signatoryDetails.phone) newErrors.phone = "Phone Number is required";
    if (!signatoryDetails.idDocument) newErrors.idDocument = "Identification Document is required";
    if (!locationDetails.localGovernment) newErrors.localGovernment = "Local Government is required";
    if (!locationDetails.state) newErrors.state = "State is required";
    else {
      setStep(5)
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    
  };
 

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [otp, setOtp] = useState("");
  const handleNext = () => {
    if (accountType === "corporate") {
      setStep(2);
    } else if (accountType === "personal") {
      alert("COMING SOON");
    }
  };

  const validateTin = () => {
    // Simulating TIN validation (replace with actual API call if needed)
    if (tinNumber.length === 10) {
      setIsTinValid(true);
      setStep(3);
    } else {
      alert("Invalid TIN. Please enter a valid 10-digit TIN number.");
    }
  };

  const handleSubmit=()=>{
    alert("form submitted")
  }
  const handleRequestOtpSubmit = () => {
    if (!acceptedTerms) {
      alert("You must accept the Terms & Conditions before proceeding.");
      return;
    }
    alert("OTP Sent to registered phone and email!");
    setStep(6);
  };

  const handleResendOtp = () => {
    alert("OTP resent successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-8xl">
      <div className="w-1/2 hidden md:block h-170"><img src={pos1} alt="" className="h-full w-full object-cover"/></div>
    <div>
      <Card className="w-160 h-170 p-4 flex items-center justify-center border-hidden bg-black rounded-none">
        <CardHeader>
          <CardTitle className="text-2xl">ONBOARDING FORM</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-center">
        <img src={wakeel_img} alt="" className="w-50"/>
        </div>
        
        <CardContent>
          {step === 1 && (
            <div>
              <Label>Choose Account Type:</Label>
              <Select onValueChange={setAccountType}>
                <SelectTrigger className="mt-2 w-90 bg-white">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="personal">Bussiness</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleNext} className="mt-4 w-full text-white  bg-[#B99745] hover:bg-[#7F7F7F] rounded-4xl">Next</Button>
            </div>
          )}
          
{step === 2 && (
            <div>
              <Label className="text-white">Enter TIN Number:</Label>
              <Input
                type="text"
                placeholder="Enter 10-digit TIN"
                value={tinNumber}
                onChange={(e) => setTinNumber(e.target.value)}
                className="mt-2 w-90 bg-white"
              />
              <Button onClick={validateTin} className="mt-4 w-full bg-[#BF9E4D] hover:bg-[#BF9E4D] rounded-4xl">Validate</Button>
              <Button onClick={() => setStep(1)} className="mt-2 w-full bg-[#ffffff] text-black border-2 border-gray-700 hover:text-black rounded-4xl">Back</Button>
            </div>
          )}
          {step === 3 && (
            <div>
              <Label className="text-white">Business Name:</Label>
              <Input
                type="text"
                placeholder="Enter Business Name"
                value={businessInfo.name}
                onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                className="mt-2 bg-white"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <Label className="mt-1 text-white">Address:</Label>
              <Input
                type="text"
                placeholder="Enter Address"
                value={businessInfo.address}
                onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
                className="mt-1 bg-white"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              <Label className="mt-1 text-white">Email:</Label>
              <Input
                type="email"
                placeholder="Enter Email"
                value={businessInfo.email}
                onChange={(e) => setBusinessInfo({ ...businessInfo, email: e.target.value })}
                className="mt-1 bg-white"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <Label className="mt-1 text-white">Phone Number:</Label>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                value={businessInfo.phone}
                onChange={(e) => setBusinessInfo({ ...businessInfo, phone: e.target.value })}
                className="mt-1 bg-white"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              <Label className="mt-1 text-white">Registration Number:</Label>
              <Input
                type="text"
                placeholder="Enter Registration Number"
                value={businessInfo.registrationNumber}
                onChange={(e) => setBusinessInfo({ ...businessInfo, registrationNumber: e.target.value })}
                className="mt-1 bg-white"
              />
              {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
              <div className='flex flex-row gap-15 pt-4 justify-center'>
              <Button onClick={() => setStep(2)} className="flex cursor-pointer w-30 
              bg-[#ffffff] py-1 px-4 text-sm font-mediumn text-black border-2 border-gray-700 hover:text-white">Back</Button>
              <Button onClick={() => validateStep3() && setStep(4)}  className="flex cursor-pointer w-30 
              bg-[#BF9E4D] py-1 px-4 text-sm font-mediumn hover:bg-green-500">Next</Button>
            </div>
            </div>
          )}
          {step === 4 && (
            <div>
            <Label className="text-white">BVN:</Label>
            <Input type="text" placeholder="Enter BVN" value={signatoryDetails.bvn} onChange={(e) => setSignatoryDetails({ ...signatoryDetails, bvn: e.target.value })} className="mt-2 bg-white" />
            {errors.bvn && <p className="text-red-500 text-sm">{errors.bvn}</p>}
            <Label className="mt-2 text-white">Place of Birth:</Label>
            <Input type="text" placeholder="Enter Place of Birth" value={signatoryDetails.placeOfBirth} onChange={(e) => setSignatoryDetails({ ...signatoryDetails, placeOfBirth: e.target.value })} className="mt-2 bg-white" />
            {errors.placeOfBirth && <p className="text-red-500 text-sm">{errors.placeOfBirth}</p>}
            <Label className="mt-2 text-white">Gender:</Label>
            <Select onValueChange={(value) => setSignatoryDetails({ ...signatoryDetails, gender: value })}>
              <SelectTrigger className="mt-2 w-full bg-white">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            <Label className="mt-2 text-white">Upload Identification Document:</Label>
            <Input id="picture" type="file" onChange={(e) => setSignatoryDetails({ ...signatoryDetails, idDocument: e.target.files[0] })} className="mt-2 bg-white" />
            {errors.idDocument && <p className="text-red-500 text-sm">{errors.idDocument}</p>}
            <Label className="mt-2 text-white">Local Government:</Label>
            <Input type="text" placeholder="Enter Local Government" value={locationDetails.localGovernment} onChange={(e) => setLocationDetails({ ...locationDetails, localGovernment: e.target.value })} className="mt-2 bg-white" />
            {errors.localGovernment && <p className="text-red-500 text-sm">{errors.localGovernment}</p>}
            <Label className="mt-2 text-white">State:</Label>
            <Input type="text" placeholder="Enter State" value={locationDetails.state} onChange={(e) => setLocationDetails({ ...locationDetails, state: e.target.value })} className="mt-2 bg-white" />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            <div className='flex flex-row gap-15 pt-4 justify-center'>
            <Button onClick={() => setStep(3)} className="flex cursor-pointer w-30 
              bg-[#ffffff] py-1 px-1 text-sm font-mediumn text-black border-1 border-gray-700 hover:text-white">Back</Button>
            <Button onClick={() =>  validate()} className="flex cursor-pointer w-30 
              bg-[#B99745] py-1 px-4 text-sm font-mediumn hover:bg-green-500">Next</Button>
          </div>
          </div>
          )}
            {step === 5 && (
            <div>
              <Label className="mt-2 text-white">Terms and Conditions</Label>
              <p className="text-sm">Agents must accept terms and conditions before submission.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-white">Read Terms & Conditions</Button>
                </DialogTrigger>
                <DialogContent>
                  <p className="text-sm text-white">By proceeding, you agree to comply with all applicable regulations and provide accurate information. Failure to do so may result in account suspension or termination. Your personal data will be securely stored and used solely for verification purposes.</p>
                </DialogContent>
              </Dialog>
              <p className="text-sm">Agents must accept terms and conditions before submission.</p>
              <div className="flex items-center mt-2">
                <Checkbox checked={acceptedTerms} onCheckedChange={setAcceptedTerms} className="bg-white"/>
                <Label className="ml-2 text-white">I accept the Terms & Conditions</Label>
              </div>
              <Button onClick={() => setStep(4)} className="mt-4 w-full bg-[#ffffff] text-black border-2 border-gray-700 hover:text-white">Back</Button>
              <Button onClick={handleRequestOtpSubmit} className="mt-2 w-full bg-[#B99745] ">Submit</Button>
            </div>
          )}
          {step === 6 && (
            <div>
              <Label className="text-white">Enter OTP:</Label>
              <Input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="mt-2 bg-white" />
              <Button onClick={handleSubmit} className="mt-4 w-full bg-[#B99745]">Verify OTP & Submit</Button>
              <Button onClick={handleResendOtp} className="mt-2 w-full">Resend OTP</Button>

            </div>
          )}
        </CardContent>
      </Card>
    </div>
    </div>
    </div>
  );
}


export default Form