import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class SharedService {
  constructor(private modalService: NgbModal) {}

  openModal(component: any) {
    const modalRef = this.modalService.open(component);
    modalRef.componentInstance.name = 'Hello World';
  }
}
