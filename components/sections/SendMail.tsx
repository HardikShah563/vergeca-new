"use client";

// importing from react
import { useState } from "react";

// importing shadcn components
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function SendMail() {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    function handleChange(event: any) {
        console.log(event.target.name, event.target.value);

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Create a new FormData object or use an existing one
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        console.log(formData);

        try {
            const response = await fetch('https://vergeca.in/G8g2GpupCrxpsED-vergeca-v2-bSfejdRNEKd3Blq/admin_api/index.php/api/contactquery', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();

    //     // Create a new FormData object or use an existing one
    //     // const formData = new FormData(event.currentTarget as HTMLFormElement);
    //     console.log(formData);

    //     try {
    //         const response = await fetch('https://vergeca.in/G8g2GpupCrxpsED-vergeca-v2-bSfejdRNEKd3Blq/admin_api/index.php/api/contactquery', {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log(result);
    //         } else {
    //             console.error('Error submitting form:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="px-1">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="phone" className="px-1">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="number"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email" className="px-1">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="message" className="px-1">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="min-h-[150px]"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    variant={"default"}
                    className="w-full bg-accent group-hover:bg-foreground gap-1"
                    onClick={() => {
                        toast({
                            title: "Your message has been successfully sent!",
                            description: "Thank you for writing to us. We will review your message and get in touch soon if needed.'",
                        })
                    }}
                >
                    Send message
                </Button>
            </form>
        </>
    );
};
