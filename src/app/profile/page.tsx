"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const departments = [
  "Freshman and Non-Institute Courses",
  "pre-engineering",
  "Computer Science",
  "Information Science",
  "Information Technology",
  "Software Engineering",
  "Electrical Engineering",
  "Biomedical Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Economics",
  "Medicine",
  "Law",
  "Other",
];

const participationOptions = [
  { id: "kutaa-mana-galmee", label: "Kutaa mana galmee" },
  { id: "kutaa-faaruu", label: "Kutaa Faaruu" },
  { id: "kutaa-midiyaa", label: "Kutaa Miidiyaa" },
  { id: "kutaa-gochagarii", label: "Kutaa Gocha Gaarii" },
  { id: "kutaa-misomaa", label: "Kutaa Misoomaa" },
  { id: "kutaa-barumsaa", label: "Kutaa Barumsaa" },
  { id: "kutaa-ogumma", label: "Kutaa Ogummaa" },
  { id: "kutaa-miseensaa", label: "Kutaa Miseensaa" },
  { id: "kutaa-to'annaa", label: "Kutaa To'annaa" },
  { id: "kutaa-qabeenyaa", label: "Kutaa Qabeenyaa" },
  { id: "kutaa-baachii", label: "Kutaa baachii" },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Mock user data - in a real app, this would come from authentication/database
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    universityId: "JIT-12345",
    department: "Computer Science",
    gender: "male",
    phoneNumber: "+251912345678",
    origin: "Jimma",
    participations: ["kutaa-midiyaa", "kutaa-barumsaa"],
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProfile(editedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleParticipationChange = (
    participationId: string,
    checked: boolean,
  ) => {
    if (checked) {
      setEditedProfile({
        ...editedProfile,
        participations: [...editedProfile.participations, participationId],
      });
    } else {
      setEditedProfile({
        ...editedProfile,
        participations: editedProfile.participations.filter(
          (p) => p !== participationId,
        ),
      });
    }
  };

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">User Profile</h1>
            <p className="mt-2 text-muted-foreground">
              View and manage your profile information
            </p>
          </div>
          {!isEditing && <Button onClick={handleEdit}>Edit Profile</Button>}
        </div>

        <div className="grid gap-6">
          {/* Personal Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Your basic information and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  {isEditing ? (
                    <Input
                      id="firstName"
                      value={editedProfile.firstName}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          firstName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  {isEditing ? (
                    <Input
                      id="lastName"
                      value={editedProfile.lastName}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          lastName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="universityId">University ID</Label>
                  {isEditing ? (
                    <Input
                      id="universityId"
                      value={editedProfile.universityId}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          universityId: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.universityId}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  {isEditing ? (
                    <Select
                      value={editedProfile.department}
                      onValueChange={(value) =>
                        setEditedProfile({
                          ...editedProfile,
                          department: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.department}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phoneNumber"
                      value={editedProfile.phoneNumber}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.phoneNumber}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="origin">Origin</Label>
                  {isEditing ? (
                    <Input
                      id="origin"
                      value={editedProfile.origin}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          origin: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="rounded-md border border-input bg-muted px-3 py-2">
                      {profile.origin}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <p className="rounded-md border border-input bg-muted px-3 py-2 capitalize">
                  {profile.gender}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Participation Areas Card */}
          <Card>
            <CardHeader>
              <CardTitle>Participation Areas</CardTitle>
              <CardDescription>
                The areas you are involved in within the organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-3">
                  {participationOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={option.id}
                        checked={editedProfile.participations.includes(
                          option.id,
                        )}
                        onCheckedChange={(checked) =>
                          handleParticipationChange(option.id, checked === true)
                        }
                      />
                      <Label htmlFor={option.id} className="font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {profile.participations.length > 0 ? (
                    <ul className="list-inside list-disc space-y-1">
                      {profile.participations.map((participationId) => {
                        const option = participationOptions.find(
                          (opt) => opt.id === participationId,
                        );
                        return (
                          <li key={participationId} className="text-sm">
                            {option?.label || participationId}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No participation areas selected
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
