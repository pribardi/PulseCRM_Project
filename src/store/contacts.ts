import { create } from 'zustand';
import type { Contact } from '../types';

interface ContactsState {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateContact: (id: string, contact: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
}

export const useContactsStore = create<ContactsState>((set) => ({
  contacts: [],
  addContact: (contactData) => {
    const contact: Contact = {
      id: crypto.randomUUID(),
      ...contactData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ contacts: [...state.contacts, contact] }));
  },
  updateContact: (id, contactData) => {
    set((state) => ({
      contacts: state.contacts.map((contact) =>
        contact.id === id
          ? { ...contact, ...contactData, updatedAt: new Date() }
          : contact
      ),
    }));
  },
  deleteContact: (id) => {
    set((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  },
}));